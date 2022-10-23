package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Section;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.tables.Section.SECTION;

/* CRUD functions for section */
@Service
public class SectionServiceImpl implements SectionService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a section */
    @Override
    public Section insertSection(Section section) {
        dsl.insertInto(SECTION,
                SECTION.SECTION_NO,
                SECTION.CAPACITY)
        .values(
                section.getSectionNo(),
                section.getCapacity())
        .execute();
        return section;
    }

    /* get all sections */
    @Override
    public List<Section> getSections() {
        return dsl.selectFrom(SECTION).fetchInto(Section.class);
    }

    /* get section by ID */
    @Override
    public Section getSectionById(Integer sectionId) {
        return dsl.selectFrom(SECTION)
                .where(SECTION.SECTION_ID.eq(sectionId))
                .fetchOneInto(Section.class);
    }

    /* update section details */
    @Override
    public Section updateSection(Integer sectionId, Section section) {
        dsl.update(SECTION)
                .set(SECTION.SECTION_NO, section.getSectionNo())
                .set(SECTION.CAPACITY, section.getCapacity())
                .where(SECTION.SECTION_ID.eq(sectionId))
                .execute();
        return section;
    }

    /* delete section by ID */
    @Override
    public void deleteSectionById(Integer sectionId) {
        dsl.deleteFrom(SECTION)
                .where(SECTION.SECTION_ID.eq(sectionId))
                .execute();
    }

}
