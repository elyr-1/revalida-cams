package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Professor;
import java.util.List;

public interface ProfessorInterface {

    List<Professor> getProfessors();
    Professor getProfessorById(Integer professorId);
    Professor insertProfessor(Professor professor);
    Professor updateProfessor(Integer professorId, Professor professor);
    void deleteProfessorById(Integer professorId);

}
