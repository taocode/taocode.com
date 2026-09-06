import { differenceInMonths } from 'date-fns';
import { parse as parseYaml } from 'yaml';
import raw from './experience.yaml?raw';

export type ExperienceItem = {
  name: string;
  /** Effective years (calendar × intensity), used for the chart bar. */
  years: number;
  calendarYears: number;
  intensity: number;
  active: boolean;
  blurb?: string;
  children?: ExperienceItem[];
};

type YamlPeriod = {
  start: string | number;
  end?: string | number;
};

type YamlNode = {
  name: string;
  start?: string | number;
  end?: string | number;
  intensity?: number;
  periods?: YamlPeriod[];
  blurb?: string;
  children?: YamlNode[];
};

function parseMonth(value: string | number): Date {
  const str = String(value).trim();
  if (/^\d{4}$/.test(str)) {
    return new Date(Number(str), 0, 1);
  }
  const match = /^(\d{4})-(\d{2})$/.exec(str);
  if (!match) {
    throw new Error(`Invalid experience date "${str}" (use YYYY or YYYY-MM)`);
  }
  return new Date(Number(match[1]), Number(match[2]) - 1, 1);
}

function yearsBetween(start: Date, end: Date): number {
  const months = Math.max(0, differenceInMonths(end, start));
  return months / 12;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function clampIntensity(value: number | undefined): number {
  if (value == null || Number.isNaN(value)) return 1;
  return Math.min(1, Math.max(Number.EPSILON, value));
}

function normalizePeriods(node: YamlNode): YamlPeriod[] {
  if (node.periods?.length) {
    return node.periods;
  }
  if (node.start == null || node.start === '') {
    throw new Error(
      `Experience item "${node.name}" needs start or periods`,
    );
  }
  return [{ start: node.start, end: node.end }];
}

function hydrate(node: YamlNode, now: Date): ExperienceItem {
  const periods = normalizePeriods(node);
  const intensity = clampIntensity(node.intensity);
  let calendarYears = 0;
  let active = false;

  for (const period of periods) {
    const start = parseMonth(period.start);
    const open = period.end == null || period.end === '';
    if (open) active = true;
    const end = open ? now : parseMonth(period.end!);
    calendarYears += yearsBetween(start, end);
  }

  const calendarRounded = round1(calendarYears);
  const years = round1(calendarYears * intensity);

  const item: ExperienceItem = {
    name: node.name,
    years,
    calendarYears: calendarRounded,
    intensity,
    active,
  };
  if (node.blurb) item.blurb = node.blurb;
  if (node.children?.length) {
    item.children = node.children
      .map((child) => hydrate(child, now))
      .sort((a, b) => a.years - b.years);
  }
  return item;
}

export function loadExperience(now = new Date()): ExperienceItem[] {
  const tree = parseYaml(raw) as YamlNode[];
  return tree.map((node) => hydrate(node, now)).sort((a, b) => a.years - b.years);
}

const techEx = loadExperience();
export default techEx;
