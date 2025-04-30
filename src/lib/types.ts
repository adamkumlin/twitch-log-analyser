export type SearchMetric = "user" | "message";

export interface LogFile {
  file: File | null;
  text: string;
}

export interface SearchQuery {
  query: string;
  metric: SearchMetric;
}

export interface LogSettings {
  showModActions: boolean;
  showTimestamps: boolean;
}

export interface Logs {
  originalLogs: string[];
  filteredLogs: string[];
  alteredFilteredLogs: string[];
}