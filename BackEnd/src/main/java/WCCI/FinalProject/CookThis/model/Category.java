package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long Id;

    private String title;

    @ManyToMany(mappedBy = "categories")
    private Collection<Recipe> recipes;


    public Category(String title) {
        this.title = title;
    }

    public Category() {
    }

    public Long getId() {
        return Id;
    }

    public String getTitle() {
        return title;
    }

    public Collection<Recipe> getRecipes() {
        return recipes;
    }




    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Id == category.Id && Objects.equals(title, category.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Id, title);
    }
}
