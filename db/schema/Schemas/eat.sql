IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'eat')
BEGIN
    EXEC sys.sp_executesql N'CREATE SCHEMA [eat]'
END
GO
