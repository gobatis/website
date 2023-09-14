---
sidebar_position: 7
---

# 执行

```go
batis.Exec(`update users set price = #{product.Price} where id = #{product.Id}`, 
    batis.Param("product", product))
```
