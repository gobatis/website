---
sidebar_position: 6
---

# 日志


## Export 

```go
db := open(config{
	LogExporter: timescaledb.LogExporter{
		Level: "warn",
		Table: "logs",
		Interval: ""
    }
})
```
