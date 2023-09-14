---
sidebar_position: 5
---

# Delete

普通删除:

```go
batis.Delete("users", batis.Where("id = #{id}", batis.Param("id",1)))
```

约束影响行数:
```go
batis.Affect(1).Delete("users", batis.Where("id = #{id}", batis.Param("id",1)))
```
