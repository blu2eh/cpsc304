create table "Administrates"
(
    "UserID"   NUMBER not null

        constraint "Administrates_UserID_fk"
            references "User",
    "LogEntryID"   NUMBER not null
        constraint "Administrates_LogEntryID_fk"
            references "InventoryLog",

    constraint "Administrates_pk"
        primary key ("UserID", "LogEntryID")
)
/
