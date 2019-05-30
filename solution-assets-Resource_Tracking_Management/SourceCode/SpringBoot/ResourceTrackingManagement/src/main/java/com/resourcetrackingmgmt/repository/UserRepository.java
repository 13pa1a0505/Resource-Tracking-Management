package com.resourcetrackingmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.resourcetrackingmgmt.model.Users;

/**
 * @author Kranthichandu
 *
 */
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
	@Query(value = "select * from t_users_details u where (u.user_id=(:uname) or u.email=(:uname)) and u.password=(:password)", nativeQuery = true)
	public Users findInfoByunameandpassword(@Param("uname") String uname, @Param("password") String password);
}
