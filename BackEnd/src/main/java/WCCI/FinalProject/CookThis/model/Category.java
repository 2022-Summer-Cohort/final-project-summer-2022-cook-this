package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private long Id;

    private String title;

    private String categoryImgUrl;
    @ManyToMany(mappedBy = "categories")
    private Collection<Recipe> recipes;

    public Category(String title, String categoryImgUrl, Collection<Recipe> recipes) {
        this.title = title;
        this.categoryImgUrl = categoryImgUrl;
        this.recipes = recipes;
    }

    public Category() {
    }

    public long getId() {
        return Id;
    }

    public String getTitle() {
        return title;
    }

    public String getCategoryImgUrl() {
        return categoryImgUrl;
    }

    public Collection<Recipe> getRecipes() {
        return recipes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Id == category.Id && Objects.equals(title, category.title) && Objects.equals(categoryImgUrl, category.categoryImgUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, title, categoryImgUrl);
    }
}
