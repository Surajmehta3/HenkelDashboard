import dayjs from "dayjs";

export function CountUtils(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  return {
    S: getRemainingSeconds(nowDayjs, timestampDayjs),
    M: getRemainingMinutes(nowDayjs, timestampDayjs),
    H: getRemainingHours(nowDayjs, timestampDayjs),
    D: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const S = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return S;
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const M = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return M;
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const H = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return H;
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const D = timestampDayjs.diff(nowDayjs, "Days");
  return D;
}
