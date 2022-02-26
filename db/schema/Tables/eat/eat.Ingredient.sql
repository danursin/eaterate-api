IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[Ingredient]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[Ingredient] (
		[id] INT IDENTITY(1, 1),
		[title] VARCHAR(255) NOT NULL,
		[date_created] DATETIME2(0) NOT NULL DEFAULT (GETUTCDATE()),
		CONSTRAINT [pk_eat_Ingredient_id] PRIMARY KEY ([id])
	)

END
GO
