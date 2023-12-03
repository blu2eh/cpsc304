create table "Notifications"
(
    NOTIFICATIONID    NUMBER        not null
        primary key,
    MESSAGEBODY       VARCHAR2(100) not null,
    NOTIFICATIONCOUNT NUMBER
)
/