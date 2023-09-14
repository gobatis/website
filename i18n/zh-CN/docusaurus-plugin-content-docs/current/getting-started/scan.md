---
sidebar_position: 5
title: 结果扫描 
---

## Scan 方法

Gobaits 只有 `Scan()` 一个扫描结果的方法，
它能够自动识别结果接收类型，并且精确的匹配查询数据字段和结果接收的字段。

## 精确匹配

查询的结果列必须覆盖接收类型的全部字段，否则会报错: `DatasetNotCoveredErr`.

如下所示，查询的结果必须覆盖 `product` 的所有属性：

```go
batis.Query(`select * from products where id = #{id}`,batis.Param("id",1))).
      Scan(&product)
```

## 宽松匹配

可以使用 `baits.Loose()` 方法，来指定忽略属性的覆盖，该方法使用 `JsonPath` 语法。 

如下所示，忽略匹配 `product.Price` 属性：

```go
batis.Query(`select * from products where id = #{id}`, batis.Param("id",1))).
      Scan(batis.Loose(&product, "$.Price"))
```


