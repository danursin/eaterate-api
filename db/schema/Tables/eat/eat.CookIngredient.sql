IF NOT EXISTS (SELECT 1 FROM sys.objects WHERE object_id = OBJECT_ID(N'[eat].[CookIngredient]') AND type in (N'U'))
BEGIN

	CREATE TABLE [eat].[CookIngredient] (
		[cook_id] INT NOT NULL,
		[ingredient_id] INT NOT NULL,
		[unit_id] TINYINT NULL,
		[amount] DECIMAL(7, 3) NULL,
		[description] VARCHAR(255) NULL,
		CONSTRAINT [pk_eat_CookIngredient_cook_id_ingredient_id] PRIMARY KEY ([cook_id], [ingredient_id])
	)

	ALTER TABLE [eat].[CookIngredient] ADD CONSTRAINT [fk_eat_CookIngredient_cook_id_cook_id] FOREIGN KEY ([cook_id]) REFERENCES [eat].[Cook] ([id])
	ALTER TABLE [eat].[CookIngredient] ADD CONSTRAINT [fk_eat_CookIngredient_ingredient_id_ingredient_id] FOREIGN KEY ([ingredient_id]) REFERENCES [eat].[Ingredient] ([id])
	ALTER TABLE [eat].[CookIngredient] ADD CONSTRAINT [fk_eat_CookIngredient_unit_id_unit_id] FOREIGN KEY ([unit_id]) REFERENCES [eat].[Unit] ([id])

END
GO

