create table "Receives"
(
    "UserID"         NUMBER not null
        constraint "Receives_UserID_fk"
            references "User",
    "NotificationID" NUMBER not null
        constraint "Receives_NotificationID_fk"
            references "Notifications",
    constraint "Receives_PK"
        primary key ("UserID", "NotificationID")
)
/

