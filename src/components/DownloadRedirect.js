"use client";

import { useEffect } from "react";
import { installDownloadRedirect } from "../lib/download";

export default function DownloadRedirect() {
  useEffect(() => installDownloadRedirect(window, document, navigator), []);
  return null;
}
