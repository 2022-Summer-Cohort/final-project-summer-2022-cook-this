package WCCI.FinalProject.CookThis.repository;

import WCCI.FinalProject.CookThis.model.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CategoryRepo extends CrudRepository<Category, Long> {
}
