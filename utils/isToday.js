import isToday from "date-fns/isToday";
import parse from "date-fns/parse";

export default function(date) {
  date = parse(date, "yyyy-MM-dd", new Date());
  return isToday(new Date(date));
}
