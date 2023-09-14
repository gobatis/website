---
sidebar_position: 2
title: 快速开始
---

<img src="/img/logo.png" style={{width: 300, display: 'block', margin:'0 auto'}} />

大多数数据库操作的场景只是简单的 CRUD (Create, Read, Update, Delete) 操作，在这种情况下，我们需要简单易用的方法；
在进行复杂的查询时，过多的参数绑定和逻辑判断是一个令人头疼的问题，在这种场景下，我们需要一套方便的模板语法来简化操作；
在其它的场景下，比如分页查询、并发查询、大数据量批次查询等，我们需要一些快捷的方法。

综合考虑到上述需求从设计了 Gobatis。 它秉承了 Go ORM 的传统使用习惯，同时也借鉴了一些 MyBatis 的 XML Dynamic SQL 语法。
此外，它还提供许多其他功能，使系统开发变得更简单、高效和稳固。

## Feature

* Simple, An engineering-oriented ORM
* 简单，一款面向工程的 ORM
* Intuitive and convenient API design
* 直观便捷的 API 设计
* Targeted at users who prefer using native SQL
* 面向喜欢原生 SQL 的用户
* 兼容 Mybatis 的参数绑定语法和 XML 动态 SQL 语法
* 支持事务追踪
* 支持插件
* 更严格的结果匹配机制
* 支持上下文控制、
* 支持 Prepared Statement 模式
* 支持自定义 Logger
* 覆盖所有特性的测试
* 开发者友好


## 要求

> Go 1.18 or higher

## 安装

```
go get github.com/gobatis/gobaits
```

## 初始化

```go
package main

import (
	batis "github.com/gobatis/gobatis"
	"github.com/gobatis/gobatis/builder/paging"
	"github.com/gobatis/gobatis/dirver/postgres"
)

type User struct {
	Id   *int64
	Name string
}

func main() {
	
	db, err := baits.Open(postgres.Open("test.db"))
	if err != nil {
		panic("failed to connect database")
	}

	err = db.Ping()
	if err != nil {
		panic("ping error")
	}
}
```

## CRUD

```go
// Create
user := &User{Name: "tom"}
db.Insert("users", user, batis.OnConflict("id", "do noting"), batis.Returning(`id`)).Scan(&user.Id)

// Read
db.Query(`select * from users where name = #{name}`, baits.Param("name", "tom")).Scan(user)

// Update - update user's name to jack
db.Update("users", map[string]any{
	"name": "jack",
}, batis.Where(`name = #{name}`, batis.Param("name", "tom")))

// Delete - delete product
db.Delete("users", batis.Where(`name = #{name}`, batis.Param("name", "jack")))
```

## 分页查询

```go
var users []*User
var total
db.PagingQuery(batis.PagingQuery{
	Select: "*",
	Count:  "*",
	Common: `users where name age > #{age}`,
	Page:   0,  // 第一页
	Limit:  0,
	Params: []executor.Param{
		{Name: "age", Value: 18},
	},
}).Scan(&users, total)
```

## 并发查询

```go
var user *User
var products []*Products
db.ParallelQuery(
    batis.ParallelQuery{
        SQL: `select * from users where id = #{id}`,
        Params: map[string]any{
            "id": 1,
        },
        Scan: &user,
    },
    batis.ParallelQuery{
        SQL: `select * from products where user_id = #{id}`,
        Params: map[string]any{
            "id": 1,
        },
        Scan: &products,
    },    
)
```

## 关联查询

```go
var userProducts [] UserProduct
db.Query(`select * from users where id in (1,2)`).Scan(baits.Loose(&userProducts, "$..Product"))

db.AssociateQuery(batis.AssociateQuery{
    SQL: `select * from products where user_id in #{userIds}`,
    Params: map[string]any{
        "userIds": batis.Extract(usersProducts, "$.Id")
    },
    Associate: baits.Associate(usersProducts, "user_id => $.Id", "$..Product") 
})

```
