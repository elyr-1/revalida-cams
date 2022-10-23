package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Section;
import java.util.List;

public interface SectionService {

    List<Section> getSections();
    Section getSectionById(Integer sectionId);
    Section insertSection(Section section);
    Section updateSection(Integer sectionId, Section section);
    void deleteSectionById(Integer loadId);

}
