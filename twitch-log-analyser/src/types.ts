export type SearchMetric = "user" | "message";

export type LogFile = {
  file: File | null;
  text: string;
};

export type SearchQuery = {
  query: string;
  metric: SearchMetric;
};

export type LogSettings = {
  showModActions: boolean;
  showTimestamps: boolean;
};
