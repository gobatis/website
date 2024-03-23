---
sidebar_position: 3
title: 模型定义
---

## 模型定义

由普通的 Go struct 类型即可完成模型定义，例如：

```go
type Product struct {
	ID              *int            
	ProductName     string          
	Description     string          
	Price           decimal.Decimal 
	Weight          float32         
	IsAvailable     bool            
	ManufactureDate time.Time       
	AddedDateTime   time.Time       
}
```

## 命名方式

Gobatis 默认采用 `蛇形` 命名法，如 `ID` 对应 `id` 数据表列，`ProductName` 对应  `product_name`。

## 列映射

您也可以使用 `db` 标签在定义模型时指定对应的数据表列，例如：

```go
type Product struct {
	ID              *int    `db:"id"`          
	ProductName     string  `db:"product_name"`        
}
```

除此之外，您还可以修改映射数据表字段的标签名，参考配置章节。

## 自增 ID

> 注意：对于自增 ID，应该使用指针类型。

Gobatis 不支持隐式的自增 ID 绑定。您可以有两种方式获得自增 ID（不同的数据库特性不一样）。

方式一：通过 `returning` 实现，例如：

```go
db.Insert("products", product, batis.Returing("id")).Scan(&product.ID)
```

方式二：直接读取 `LastInsertId()` 方法，例如：

```go
db.Insert("products", product).LastInsertId()
```
