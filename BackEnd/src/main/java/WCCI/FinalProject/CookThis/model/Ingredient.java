package WCCI.FinalProject.CookThis.model;

import javax.persistence.Embeddable;
import java.util.Objects;

@Embeddable
public class Ingredient {
    private String name;

    private String measurement;

    public Ingredient(String name, String measurement) {
        this.name = name;
        this.measurement = measurement;
    }



    public Ingredient() {
    }

    public String getName() {
        return name;
    }

    public String getMeasurement() {
        return measurement;
    }
}


