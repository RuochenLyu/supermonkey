import { format } from "date-fns";
import parse from "date-fns/parse";
import { zhCN } from "date-fns/locale";

export default function(date, formatting = "M月d日", isTime = false) {
  const token = isTime ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";
  date = parse(date, token, new Date());
  return format(date, formatting, { locale: zhCN });
}
