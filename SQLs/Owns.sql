create table "Owns"
(
    "DeviceID" NUMBER not null
        constraint "Owns_DeviceID_fk"
            references "StorageDevice",
    "UserID"   NUMBER not null
        constraint "Owns_UserID_fk"
            references "User",
    constraint "Owns_PK"
        primary key ("UserID", "DeviceID")
)
/

