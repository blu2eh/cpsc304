create table "User"
(
    USERID      NUMBER        not null
        primary key,
    USERNAME    VARCHAR2(100) not null
        unique,
    PHONENUMBER NUMBER        not null
        unique,
    EMAIL       VARCHAR2(100) not null
        unique
)
/
