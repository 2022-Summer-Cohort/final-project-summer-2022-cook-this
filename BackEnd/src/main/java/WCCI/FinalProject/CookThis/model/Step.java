package WCCI.FinalProject.CookThis.model;

import javax.persistence.Embeddable;

@Embeddable
public class Step {
private String instructions;

    public Step(String instructions) {
        this.instructions = instructions;
    }

    public String getInstructions() {
        return instructions;
    }

    public Step() {
    }
}

