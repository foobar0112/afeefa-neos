<?php
namespace DDFA\Main\Domain\Model;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "DDFA.Main".             *
 *                                                                        *
 *                                                                        */

use TYPO3\Flow\Annotations as Flow;
use Doctrine\ORM\Mapping as ORM;

/**
 * @Flow\Entity
 */
class Initiative extends \DDFA\Main\Domain\Model\Owner{

	/**
	 * @var string
	 */
	protected $speaker;

	/**
	 * @var \Doctrine\Common\Collections\Collection<\DDFA\Map\Domain\Model\Location>
	 * @ORM\OneToMany(mappedBy="initiative")
	 */
	protected $locations;

	/**
	 * @return string
	 */
	public function getSpeaker() {
		return $this->speaker;
	}

	/**
	 * @param string $speaker
	 * @return void
	 */
	public function setSpeaker($speaker) {
		$this->speaker = $speaker;
	}

	/**
	 * @return \Doctrine\Common\Collections\Collection<\DDFA\Map\Domain\Model\IniLocation>
	 */
	public function getLocations() {
		return $this->locations;
	}


}