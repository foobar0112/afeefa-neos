<?php
namespace TYPO3\Flow\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
	Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20150510132914 extends AbstractMigration {

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function up(Schema $schema) {
		// this up() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("ALTER TABLE ddfa_map_domain_model_inilocation_tags_join DROP FOREIGN KEY FK_208C3E887D2E36");
		$this->addSql("DROP TABLE ddfa_main_domain_model_initiative_categories_join");
		$this->addSql("DROP TABLE ddfa_map_domain_model_inilocation");
		$this->addSql("DROP TABLE ddfa_map_domain_model_inilocation_tags_join");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE market_entry_id market_entry_id VARCHAR(255) DEFAULT NULL, CHANGE event_id event_id VARCHAR(255) DEFAULT NULL, CHANGE initiative_id initiative_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
	}

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function down(Schema $schema) {
		// this down() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("CREATE TABLE ddfa_main_domain_model_initiative_categories_join (main_owner VARCHAR(40) NOT NULL, main_category VARCHAR(40) NOT NULL, INDEX IDX_AD5B0BB96C3C553A (main_owner), INDEX IDX_AD5B0BB9DF6E08B4 (main_category), PRIMARY KEY(main_owner, main_category)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
		$this->addSql("CREATE TABLE ddfa_map_domain_model_inilocation (persistence_object_identifier VARCHAR(40) NOT NULL, initiative VARCHAR(40) DEFAULT NULL, openinghours VARCHAR(255) NOT NULL, lon VARCHAR(255) NOT NULL, lat VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, zip VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, rating INT NOT NULL, scope VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, mail VARCHAR(255) NOT NULL, web VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, UNIQUE INDEX flow_identity_ddfa_map_domain_model_inilocation (name, mail), INDEX IDX_8539BC4CE115DEFE (initiative), PRIMARY KEY(persistence_object_identifier)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
		$this->addSql("CREATE TABLE ddfa_map_domain_model_inilocation_tags_join (main_entry VARCHAR(40) NOT NULL, main_tag VARCHAR(40) NOT NULL, INDEX IDX_208C3E887D2E36 (main_entry), INDEX IDX_208C3E6552CB89 (main_tag), PRIMARY KEY(main_entry, main_tag)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_categories_join ADD CONSTRAINT FK_AD5B0BB96C3C553A FOREIGN KEY (main_owner) REFERENCES ddfa_main_domain_model_initiative (persistence_object_identifier)");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_categories_join ADD CONSTRAINT FK_AD5B0BB9DF6E08B4 FOREIGN KEY (main_category) REFERENCES ddfa_main_domain_model_category (persistence_object_identifier)");
		$this->addSql("ALTER TABLE ddfa_map_domain_model_inilocation ADD CONSTRAINT FK_8539BC4CE115DEFE FOREIGN KEY (initiative) REFERENCES ddfa_main_domain_model_initiative (persistence_object_identifier)");
		$this->addSql("ALTER TABLE ddfa_map_domain_model_inilocation_tags_join ADD CONSTRAINT FK_208C3E6552CB89 FOREIGN KEY (main_tag) REFERENCES ddfa_main_domain_model_tag (persistence_object_identifier)");
		$this->addSql("ALTER TABLE ddfa_map_domain_model_inilocation_tags_join ADD CONSTRAINT FK_208C3E887D2E36 FOREIGN KEY (main_entry) REFERENCES ddfa_map_domain_model_inilocation (persistence_object_identifier)");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_event_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_initiative_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL, CHANGE initiative_id initiative_id VARCHAR(255) DEFAULT NULL, CHANGE market_entry_id market_entry_id VARCHAR(255) DEFAULT NULL, CHANGE event_id event_id VARCHAR(255) DEFAULT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_tags_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_location_targetgroups_join CHANGE main_object main_object VARCHAR(255) NOT NULL");
		$this->addSql("ALTER TABLE ddfa_main_domain_model_marketentry CHANGE persistence_object_identifier persistence_object_identifier VARCHAR(40) NOT NULL");
	}
}