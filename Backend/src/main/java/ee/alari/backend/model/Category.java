package ee.alari.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private CategoryType category;
}

enum CategoryType {
    PREMIUM, DELUXE, BASIC
}
