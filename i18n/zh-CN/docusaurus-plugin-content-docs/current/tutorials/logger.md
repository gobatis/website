---
sidebar_position: 1
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
