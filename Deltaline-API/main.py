from fastapi import FastAPI
from sqlalchemy import Column, MetaData, String, Table
from sqlalchemy.ext.asyncio import create_async_engine
app = FastAPI()

async def get_values():
    meta = MetaData()
    mainTable = Table("Data", meta, Column("Date", String), Column("Title", String), Column("Content", String))
    engine = create_async_engine("sqlite+aiosqlite:///../Databases/main.db")
    async with engine.begin() as conn:
        s = mainTable.select()
        result_select = await conn.stream(s)
        async for row in result_select:
            return row
        
@app.get("/api/stats")
async def stats():
    values = await get_values()
    return {"Date": values[0], "Title": values[1], "Content": values[2]}

