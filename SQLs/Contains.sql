create table "Contains"
(
    "ItemID"   NUMBER not null
         constraint "Contains_ItemID_fk"
             references "FoodItem",
    "GroceryList#"   NUMBER not null
         constraint "Contains_GroceryList#_fk"
             references "GroceryList",
    "LogEntryID" NUMBER not null
         constraint "Contains_LogEntryID_fk"
            references "InventoryLog",

    constraint "Contains_PK"
            primary key ("ItemID", "GroceryList#")
);
/
