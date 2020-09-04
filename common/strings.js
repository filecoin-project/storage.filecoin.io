export const isEmpty = (string) => {
  // NOTE(jim): This is not empty when its coerced into a string.
  if (string === 0) {
    return false;
  }

  if (!string) {
    return true;
  }

  if (typeof string === "object") {
    return true;
  }

  if (string.length === 0) {
    return true;
  }

  string = string.toString();

  return !string.trim();
};

export const toDate = (date) => {
  return date.toUTCString();
};

export const toDateSinceEpoch = (epoch) => {
  const d = new Date(1000 * (epoch * 30 + 1598306400));

  return toDate(d);
};

export const bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
};

export const bytesToGigaByte = (n = 0) => {
  return n / (1024 * 1024 * 1024);
};
