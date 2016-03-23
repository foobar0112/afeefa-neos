<?php
namespace TYPO3\Flow\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
	Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20160227192507 extends AbstractMigration {

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function up(Schema $schema) {
		// this up() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("ALTER TABLE ddfa_main_domain_model_category CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_feedback CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_language CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_tag CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_targetgroup CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL, CHANGE market_entry_id market_entry_id VARCHAR(255) DEFAULT NULL, CHANGE event_id event_id VARCHAR(255) DEFAULT NULL, CHANGE initiative_id initiative_id VARCHAR(255) DEFAULT NULL, CHANGE type type INT NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
	}

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function down(Schema $schema) {
		// this down() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("ALTER TABLE ddfa_main_domain_model_category CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_feedback CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_language CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE initiative_id initiative_id VARCHAR(255) DEFAULT NULL, CHANGE market_entry_id market_entry_id VARCHAR(255) DEFAULT NULL, CHANGE event_id event_id VARCHAR(255) DEFAULT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL, CHANGE type type INT DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE category_id category_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry_tags_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_tag main_tag VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry_targetgroups_join CHANGE main_actor main_actor VARCHAR(255) NOT NULL, CHANGE main_targetgroup main_targetgroup VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_tag CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_targetgroup CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
	}
}