package ee.alari.backend.controller;

import ee.alari.backend.model.Category;
import ee.alari.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;
    @GetMapping("categories")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Added category name: <strong>"+category.getName() +"</strong> and category: " + category.getCategory();
    }
}
