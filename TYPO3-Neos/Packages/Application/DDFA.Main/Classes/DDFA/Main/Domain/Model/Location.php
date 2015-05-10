<?php
namespace DDFA\Main\Domain\Model;

/*                                                                        *
 * This script belongs to the TYPO3 Flow package "DDFA.Main".              *
 *                                                                        *
 *                                                                        */

use DDFA\Main\Domain\Model\Event;
use DDFA\Main\Domain\Model\Initiative;
use DDFA\Main\Domain\Model\MarketEntry;
use Doctrine\ORM\Mapping as ORM;
use TYPO3\Flow\Annotations as Flow;

/**
 * @Flow\Entity
 */
class Location extends \DDFA\Main\Domain\Model\Object
{

    /**
     * @var string
     */
    protected $lon;

    /**
     * @var string
     */
    protected $lat;

    /**
     * @var string
     */
    protected $street;

    /**
     * @var string
     */
    protected $district;

    /**
     * @var string
     */
    protected $zip;

    /**
     * @var string
     */
    protected $city;

    /**
     * @var boolean
     */
    protected $scope;

    /**
     * @var string
     */
    protected $openingHours;

    /**
     * @var int
     */
    protected $type;

    /**
     * @var Initiative
     * @ORM\ManyToOne(targetEntity="DDFA\Main\Domain\Model\Initiative")
     * @ORM\JoinColumn(name="initiative_id", referencedColumnName="persistence_object_identifier")
     */
    protected $initiative;

    /**
     * @var MarketEntry
     * @ORM\ManyToOne(targetEntity="DDFA\Main\Domain\Model\MarketEntry")
     * @ORM\JoinColumn(name="market_entry_id", referencedColumnName="persistence_object_identifier")
     */
    protected $marketEntry;

    /**
     * @var Event
     * @ORM\ManyToOne(targetEntity="DDFA\Main\Domain\Model\Event")
     * @ORM\JoinColumn(name="event_id", referencedColumnName="persistence_object_identifier")
     */
    protected $event;

    /**
     * @return string
     */
    public function getOpeningHours()
    {
        return $this->openingHours;
    }

    /**
     * @param string $openingHours
     * @return void
     */
    public function setOpeningHours($openingHours)
    {
        $this->openingHours = $openingHours;
    }

    /**
     * @return Initiative
     */
    public function getInitiative()
    {
        return $this->initiative;
    }

    /**
     * @param Initiative $initiative
     * @return void
     */
    public function setInitiative(Initiative $initiative)
    {
        $this->initiative = $initiative;
    }


    /**
     * @return string
     */
    public function getLon()
    {
        return $this->lon;
    }

    /**
     * @param string $lon
     * @return void
     */
    public function setLon($lon)
    {
        $this->lon = $lon;
    }

    /**
     * @return string
     */
    public function getLat()
    {
        return $this->lat;
    }

    /**
     * @param string $lat
     * @return void
     */
    public function setLat($lat)
    {
        $this->lat = $lat;
    }

    /**
     * @return string
     */
    public function getStreet()
    {
        return $this->street;
    }

    /**
     * @param string $zip
     * @return void
     */
    public function setZip($zip)
    {
        $this->zip = $zip;
    }

    /**
     * @return string
     */
    public function getDistrict()
    {
        return $this->district;
    }

    /**
     * @param string $district
     * @return void
     */
    public function setDistrict($district)
    {
        $this->district = $district;
    }

    /**
     * @param string $street
     * @return void
     */
    public function setStreet($street)
    {
        $this->street = $street;
    }

    /**
     * @return string
     */
    public function getZip()
    {
        return $this->zip;
    }

    /**
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param string $city
     * @return void
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return string
     */
    public function getScope()
    {
        return $this->scope;
    }

    /**
     * @param string $scope
     * @return void
     */
    public function setScope($scope)
    {
        $this->scope = $scope;
    }

    /**
     * @return MarketEntry
     */
    public function getMarketEntry()
    {
        return $this->marketEntry;
    }

    /**
     * @param MarketEntry $marketEntry
     */
    public function setMarketEntry($marketEntry)
    {
        $this->marketEntry = $marketEntry;
    }

    /**
     * @return Event
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * @param Event $event
     */
    public function setEvent($event)
    {
        $this->event = $event;
    }

    /**
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param int $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }
}