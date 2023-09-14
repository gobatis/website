---
sidebar_position: 3
title: 插入
---

> 注意：对于自增 ID 在模型定义时，应该使用指针类型。


## 单条插入

插入数据，并且返回自增 ID （如 Postgres）：

```go
type Product struct {
	Id *int64
	Name string
	Price decimal.Decimal
}

err = batis.Insert("products", product, batis.Returning("id")).Scan(&product.Id).Error
```

插入数据并且读取自增 ID（如 MySQL）：

```go
id, err = batis.Insert("products", product).LastInsertId()
```

处理冲突：

```go
baits.Insert("products", product, 
    baits.OnConflict("name", `update set price = excluded.price`),
    batis.Returning("id"),
)
```


## 批量插入

普通批量插入：

```go
batis.InsertBatch("products", 10, products)
```

处理冲突：

```go
batis.InsertBatch("products", 10, products,
    baits.OnConflict("name", `update set price = excluded.price`),
)
```

批量返回自增 ID:

```go
var ids []int64
batis.InsertBatch("products", 10, products,
    batis.Returning("id"),
).Scan(&ids)
```

获取最后一个自增 ID:

```go
id,err = batis.InsertBatch("products", 10, products).LastInsertId()
```

## 组合结构

支持组合结果体插入数据和接收数据。

```go
type Id struct {
	Id *int64
}

type Product struct {
	Id
	Name string
}

batis.Insert("products", product, batis.Returning("id")).Scan(&product.Id)
```
