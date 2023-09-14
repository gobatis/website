---
sidebar_position: 4
title: 更新
---


普通更新操作:

```go
batis.Update("products", map[string]any{
      "updated_at": time.Now(),
   }, 
   batis.Where("id = #{user.Id}", batis.Param("user",user)),
)
```

限制更新 1 条记录:

```go
batis.Affect(1).Update("products", map[string]any{
      "updated_at": time.Now(),
   }, 
   batis.Where("id = #{user.Id}", batis.Param("user",user)),
)
```

限制更新至少 1 条记录:

```go
batis.Affect("1+").Update("products", map[string]any{
      "updated_at": time.Now(),
   }, 
   batis.Where("id = #{user.Id}", batis.Param("user",user)),
)
```

