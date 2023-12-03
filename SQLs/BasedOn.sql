create table "BasedOn"
(
    "LogEntryID" int not null
        constraint BASEDON_INVENTORYLOG_LOGENTRYID_FK
            references "InventoryLog",
    "MealID" int
        constraint BASEDON_PK
            primary key
        constraint BASEDON_MEALSUGGESTION_MEALID_FK
            references "MealSuggestion" ("MealID")
)
    /