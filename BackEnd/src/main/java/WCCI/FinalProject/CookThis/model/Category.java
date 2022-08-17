package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String imageUrl;
    @ManyToMany(mappedBy = "categories")
    private Collection<Recipe> recipes;

    public Category(String title, String imageUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
    }
    public Category() {
    }

    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Collection<Recipe> getRecipes() {
        return recipes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return id == category.id && Objects.equals(title, category.title);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }
}
