# import these modules if you need them:
from datetime import datetime, timezone
import math
      
def time_until_take_off(from_time: str, take_off_time: str) -> int:
  from_time = from_time[:-3].replace("*", "-").replace("@", " ").replace("|", ":")
  take_off_time = take_off_time[:-3].replace("*", "-").replace("@", " ").replace("|", ":")

  start = datetime.strptime(from_time, "%Y-%m-%d %H:%M:%S")
  end = datetime.strptime(take_off_time, "%Y-%m-%d %H:%M:%S")

  seconds = end - start
  return int(seconds.total_seconds())