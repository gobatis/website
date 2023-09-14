---
sidebar_position: 6
title: 查询
---

## 查询单条记录

```go
var product *Product
db.Query(`select * from products where id = #{id}`,batis.Param("id",1))).Scan(&user)
```


## 查询多条记录

```go
var products []*Products
db.Query(`select * from products`).Scan(&products
```

## 计数查询

```go
var count int64
db.Query(`select count(1) from products`).Scan(&count)
```
