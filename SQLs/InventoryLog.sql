create table "InventoryLog"
(
    "LogEntryID"   NUMBER
        constraint InventoryLog_pk
            primary key,
    "LogTimeVal"   NUMBER,
    "ItemCount"    NUMBER,
    "ItemID"    NUMBER
        constraint InventoryLog_ItemID_pk
            references "FoodItem"
)
/
