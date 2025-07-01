// DB
class User {
    String id;
    String name;
    Integer age;
    String createTime;
    String updateTime;
}

// post
class UserDto {
    String name;
    Integer age;
}

// get
class UserVto {
    String id;
    String name;
    Integer age;
    String createTime;
    String updateTime;
}

// update
class UserDto2 {
    String Id;
    String name;
    Integer age;
}


// DB 和 get 使用同一个
class User {
    String id;
    String name;
    Integer age;
    String createTime;
    String updateTime;
}

// post
class UserDto {
    String name;
    Integer age;
}

// update
class UserDto2 {
    String Id;
    String name;
    Integer age;
}