IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[Dish]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[Dish] (
		[id] INT IDENTITY(1, 1),
		[title] VARCHAR(255) NOT NULL,
		[date_created] DATETIME2(0) NOT NULL DEFAULT (GETUTCDATE()),
		CONSTRAINT [pk_eat_Dish_id] PRIMARY KEY ([id])
	)

END
GO
