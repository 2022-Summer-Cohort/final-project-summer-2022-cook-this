package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Measurement {
    @Id
    @GeneratedValue
    private Long id;
    private String type;
    private Float amount;

    @ManyToMany
    @JsonIgnore
    private Collection<Ingredient> ingredients;

    public Measurement(String type, Float amount, Ingredient... ingredients) {
        this.type = type;
        this.amount = amount;
        this.ingredients = new ArrayList<>();
    }
    public Measurement(){

    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public Float getAmount() {
        return amount;
    }

    public Collection<Ingredient> getIngredients() {
        return ingredients;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Measurement that = (Measurement) o;
        return Objects.equals(id, that.id) && Objects.equals(type, that.type) && Objects.equals(amount, that.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, amount);
    }
}
