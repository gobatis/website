---
sidebar_position: 2
title: 快速开始
---

## 要求

Go 1.18 or higher

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
