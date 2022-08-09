package WCCI.FinalProject.CookThis.repository;

import WCCI.FinalProject.CookThis.model.Ingredient;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepo extends CrudRepository<Ingredient, Long> {
}
